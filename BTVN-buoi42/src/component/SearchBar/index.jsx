import {Box, Button, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {setSearchTerm} from "../contactsSlice/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";

const SearchBar = ({setIsOpenForm, setEditingContact}) => {
    const dispatch = useDispatch();
    const {searchTerm} = useSelector((state) => state.contacts);

    // State local để lưu giá trị input (tránh delay khi gõ)
    const [inputValue, setInputValue] = useState(searchTerm);

    // Debounce: Chờ 300ms sau khi user ngừng gõ mới dispatch
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(setSearchTerm(inputValue));
        }, 300);

        // Cleanup: Xóa timeout nếu user tiếp tục gõ
        return () => clearTimeout(timeoutId);
    }, [inputValue, dispatch]);

    // Sync với Redux state (khi reset search từ nơi khác)
    useEffect(() => {
        setInputValue(searchTerm);
    }, [searchTerm]);

    // Xử lý khi nhập ô search
    const onSearchChange = (e) => {
        const value = e.target.value;
        setInputValue(value); // Cập nhật ngay input
        // Không dispatch ngay, để useEffect xử lý debounce
    }

    // Xử lý khi nhấn vào nút Thêm mới
    const onAddNew = () => {
        console.log('Đã nhấn vào nút Thêm mới!')
        setIsOpenForm(true)
        setEditingContact(null)
    }

    return (
        <div>
            {/* Search và Add Button */}
            <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                    fullWidth
                    placeholder="Tìm kiếm theo tên hoặc email..."
                    autoComplete={'off'}
                    value={inputValue}
                    onChange={onSearchChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{ minWidth: 120 }}
                    onClick={onAddNew}
                >
                    Thêm mới
                </Button>
            </Box>
        </div>
    )
}

export default SearchBar;