import React, { useEffect, useState } from 'react';
import { Stack, Button, TextField } from '@mui/material';

import ContactTable from './component/Table/ContactTable.jsx';
import ContactDialog from './component/dialog/ContactDialog.jsx';
import ConfirmDialog from './component/dialog/ConfirmDialog.jsx';

import {
    getContacts,
    addContact,
    updateContact,
    deleteContact
} from './ultils/index.js';

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMode, setDialogMode] = useState('add');
    const [currentContact, setCurrentContact] = useState({ name: '', age: '', address: '' });

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const fetchContacts = async () => {
        const data = await getContacts();
        setContacts(data);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleAdd = () => {
        setCurrentContact({ name: '', age: '', address: '' });
        setDialogMode('add');
        setDialogOpen(true);
    };

    const handleEdit = (contact) => {
        setCurrentContact(contact);
        setDialogMode('edit');
        setDialogOpen(true);
    };

    const handleDeleteRequest = (id) => {
        setDeleteId(id);
        setConfirmOpen(true);
    };

    const handleDelete = async () => {
        await deleteContact(deleteId);
        fetchContacts();
        setConfirmOpen(false);
    };

    const handleSubmit = async (data) => {
        if (!data.name || !data.age || !data.address) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        if (dialogMode === 'add') {
            await addContact(data);
        } else {
            await updateContact(data.id, data);
        }
        fetchContacts();
        setDialogOpen(false);
    };

    const filteredContacts = contacts.filter(c =>
        c.name?.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div style={{ padding: 20 }}>
            <h2>Danh bạ</h2>

            <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
                <TextField
                    label="Tìm kiếm theo tên"
                    variant="outlined"
                    size="small"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ width: 300 }}
                />
                <Button variant="contained" color="success" onClick={handleAdd}>
                    + Thêm mới
                </Button>
            </Stack>

            <ContactTable
                contacts={filteredContacts}
                onEdit={handleEdit}
                onDelete={handleDeleteRequest}
            />

            <ContactDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onSubmit={handleSubmit}
                contact={currentContact}
                mode={dialogMode}
            />

            <ConfirmDialog
                open={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onConfirm={handleDelete}
                message="Bạn có chắc muốn xoá liên hệ này không?"
            />
        </div>
    );
}
