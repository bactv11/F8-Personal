import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import {fetchContacts} from "../../ultils/index.js";
import SearchBar from '../SearchBar/index.jsx';
import ContactCard from '../ContactCard/index.jsx';
import ContactForm from "../ContactForm/index.jsx";

const ContactList = () => {
    const dispatch = useDispatch();
    const {items, loading, error, searchTerm} = useSelector((state) => state.contacts);
    useEffect(() => {
    }, [items]);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const [isOpenForm, setIsOpenForm] = useState(false);
    const [editingContact, setEditingContact] = useState(null);


    const onCloseDialog = () => {
        setIsOpenForm(false);
    }

    const filteredContacts = useMemo(() => {
        if (!searchTerm) {
            return items;
        }
        return items.filter((contact) => {
            const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
            const email = contact.email.toLowerCase();
            const search = searchTerm.toLowerCase();

            return fullName.includes(search) || email.includes(search);
        })
    }, [items, searchTerm]);


    return (
        <Container >
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
            >
            </Typography>

            <SearchBar
                setIsOpenForm={setIsOpenForm}
                setEditingContact={setEditingContact}
            />

            {!loading && (
                <>
                    {
                        filteredContacts.length === 0 ? (
                            <Box sx={{ textAlign: 'center'}}>
                                <Typography variant="h6" color="text.secondary">
                                    {searchTerm ? "Không tìm thấy liên hệ nào" : "Chưa có liên he nào"}
                                </Typography>
                            </Box>
                        ) : (
                            <Grid container spacing={2}>
                                {
                                    filteredContacts.map((contact) => (
                                        <Grid key={contact.id}>
                                            <ContactCard
                                                contact={contact}
                                                setIsOpenForm={setIsOpenForm}
                                                setEditingContact={setEditingContact}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )
                    }
                </>
            )}

            <ContactForm
                open={isOpenForm}
                onClose={onCloseDialog}
                contact={editingContact}
                loading={loading}
                setEditingContact={setEditingContact}
                setIsOpenForm={setIsOpenForm}
            />
        </Container>
    )
}

export default ContactList;