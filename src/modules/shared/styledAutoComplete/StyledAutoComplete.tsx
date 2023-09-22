import { styled, Autocomplete } from '@mui/material';

const StyledAutocomplete = styled(Autocomplete)({
    flex: 2,
    borderColor: '#D6D5DC',
    '& .MuiAutocomplete-inputRoot': {
        color: '#080A0F',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
            padding: '8px 10px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF842B',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF842B',
        },
        '&.MuiOutlinedInput-root': {
            padding: 0,
        },
    },
    '& .MuiInputLabel-root': {
        position: 'relative',
        transform: 'unset',
        marginBottom: '5px',
        color: '#38354D',
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '14px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
    },
    '& .MuiOutlinedInput-notchedOutline legend': {
        width: 0,
    },
});

export default StyledAutocomplete;
