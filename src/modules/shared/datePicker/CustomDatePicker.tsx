import { styled } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useFormContext } from 'react-hook-form';

export default function CustomDatePicker() {
    const { control } = useFormContext();

    return (
        <Controller
            name='dateOfBirth'
            control={control}
            rules={{ required: true }}
            defaultValue={null}
            render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StyledDatePicker
                        {...field}
                        label='Date of birth'
                        slotProps={{
                            textField: { placeholder: 'Enter date' },
                        }}
                        disableFuture
                        autoFocus
                        closeOnSelect
                    />
                </LocalizationProvider>
            )}
        />
    );
}

const StyledDatePicker = styled(MobileDatePicker)({
    flex: 1,
    borderColor: '#D6D5DC',
    '& .MuiInputBase-root': {
        color: '#080A0F',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        height: 'unset',
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF842B',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF842B',
        },
        '& .MuiOutlinedInput-input': {
            padding: '8px 10px',
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
