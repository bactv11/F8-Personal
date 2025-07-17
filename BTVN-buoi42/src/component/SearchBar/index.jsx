import {Box, Button, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {setSearchTerm} from "../contactsSlice/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";

const SearchBar = ({setIsOpenForm, setEditingContact}) => {
    const dispatch = useDispatch();
    const {searchTerm} = useSelector((state) => state.contacts);
    const [inputValue, setInputValue] = useState(searchTerm);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(setSearchTerm(inputValue));
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [inputValue, dispatch]);

    useEffect(() => {
        setInputValue(searchTerm);
    }, [searchTerm]);

    const onSearchChange = (e) => {
        const value = e.target.value;
        setInputValue(value); // Cập nhật ngay input
        // Không dispatch ngay, để useEffect xử lý debounce
    }

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
                    sx={{ minWidth: 120 , height: 50 }}
                    onClick={onAddNew}
                >
                    Thêm mới
                </Button>
            </Box>
        </div>
    )
}

export default SearchBar;