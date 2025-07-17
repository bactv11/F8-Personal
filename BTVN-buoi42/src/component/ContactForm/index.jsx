import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, Avatar} from "@mui/material";
import {useEffect, useState} from "react";
import {createContact, updateContact} from "../../ultils/index.js";
import {useDispatch} from "react-redux";
import {PhotoCamera, Delete} from "@mui/icons-material";

const ContactForm = ({open, onClose, contact, loading, setEditingContact, setIsOpenForm}) => {

    const dispatch = useDispatch();
    // State cho form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        image: ''
    });

    const [errors, setErrors] = useState({});

    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        if (contact) {
            setFormData({
                firstName: contact.firstName || '',
                lastName: contact.lastName || '',
                email: contact.email || '',
                phone: contact.phone || '',
                image: contact.image || ''
            });
            setPreviewImage(contact.image || '');
        } else {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                image: ''
            });
            setPreviewImage('');
        }
        setErrors({});
    }, [contact, open]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setErrors(prev => ({...prev, image: 'Chỉ chấp nhận file ảnh'}));
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setErrors(prev => ({...prev, image: 'Kích thước file không được vượt quá 5MB'}));
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64String = e.target.result;
            setFormData(prev => ({...prev, image: base64String}));
            setPreviewImage(base64String);
            // Xóa error nếu có
            setErrors(prev => ({...prev, image: ''}));
        };
        reader.readAsDataURL(file);
    };

        const handleRemoveImage = () => {
        setFormData(prev => ({...prev, image: ''}));
        setPreviewImage('');
        // Reset input file để có thể chọn lại ảnh đã xóa
        const fileInput = document.getElementById('image-upload');
        if (fileInput) fileInput.value = '';
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Tên không được để trống';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Họ không được để trống';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email không được để trống';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Số điện thoại không được để trống';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            if(validateForm()) {
                if (contact) {
                    // Cập nhật contact
                    await dispatch(updateContact({ id: contact.id, contactData: formData }));
                    setEditingContact(null);
                    setIsOpenForm(false);
                } else {
                    // Tạo mới contact
                    await dispatch(createContact(formData));
                    setIsOpenForm(false);
                }
            }
        } catch (error) {
            console.error('Lỗi khi submit form:', error);
        }
    };

    const handleClose = () => {
        if (!loading) {
            onClose();
        }
    };

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>
                {contact ? 'Sửa Liên Hệ' : 'Thêm Liên Hệ Mới'}
            </DialogTitle>

            <form onSubmit={onSubmit}>
                <DialogContent>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        {/* Avatar Upload Section */}
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
                            {/* Preview Avatar */}
                            <Avatar
                                src={previewImage}
                                sx={{width: 100, height: 100, bgcolor: 'primary.main'}}
                            >
                                {formData.firstName.charAt(0).toUpperCase()}
                            </Avatar>

                            {/* Upload và Remove buttons */}
                            <Box sx={{display: 'flex', gap: 1}}>
                                <input
                                    accept="image/*"
                                    style={{display: 'none'}}
                                    id="image-upload"
                                    type="file"
                                    onChange={handleImageUpload}
                                />
                                <label htmlFor="image-upload">
                                    <IconButton color="primary" component="span">
                                        {/*<PhotoCamera />*/}
                                        <Button
                                            variant="outlined"
                                            component="span"
                                            startIcon={<PhotoCamera />}
                                        >
                                            Chọn ảnh
                                        </Button>
                                    </IconButton>
                                </label>

                                {previewImage && (
                                    <IconButton color="error" onClick={handleRemoveImage}>
                                        <Delete />
                                    </IconButton>
                                )}
                            </Box>
                            {errors.image && (
                                <Box sx={{color: 'error.main', fontSize: '0.75rem'}}>
                                    {errors.image}
                                </Box>
                            )}
                        </Box>

                        {/* First Name */}
                        <TextField
                            name="firstName"
                            label="Tên"
                            value={formData.firstName}
                            onChange={onChangeInput}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            fullWidth
                            required
                        />

                        {/* Last Name */}
                        <TextField
                            name="lastName"
                            label="Họ"
                            value={formData.lastName}
                            onChange={onChangeInput}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            fullWidth
                            required
                        />

                        {/* Email */}
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={onChangeInput}
                            error={!!errors.email}
                            helperText={errors.email}
                            fullWidth
                            required
                        />

                        {/* Phone */}
                        <TextField
                            name="phone"
                            label="Số điện thoại"
                            value={formData.phone}
                            onChange={onChangeInput}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            fullWidth
                            required
                        />
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleClose}
                        disabled={loading}
                    >
                        Hủy
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                    >
                        {loading ? 'Đang lưu...' : (contact ? 'Cập nhật' : 'Thêm mới')}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default ContactForm