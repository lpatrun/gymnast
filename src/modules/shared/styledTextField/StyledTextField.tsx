import { styled, TextField, outlinedInputClasses, inputLabelClasses } from '@mui/material';

const StyledTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: '#D6D5DC',
        padding: '8px 10px',
    },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: '#FF842B',
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
        {
            borderColor: '#FF842B',
        },
    [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
        color: '#080A0F',
    },
    [`& .${outlinedInputClasses.input}`]: {
        padding: '8px 10px',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
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

export default StyledTextField;
