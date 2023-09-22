import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { InputAdornment } from '@mui/material';
import closeIcon from '../../assets/closeIcon.svg';
import icArrow from '../../assets/icArrow.svg';
import { axiosInstance } from '../../service';
import Button from '../shared/button/Button';
import CustomDatePicker from '../shared/datePicker/CustomDatePicker';
import HeaderComponent from '../shared/header/HeaderComponent';
import StyledAutocomplete from '../shared/styledAutoComplete/StyledAutoComplete';
import StyledTextField from '../shared/styledTextField/StyledTextField';
import EmptyListComponent from './components/emptyListComponent/EmptyListComponent';
import styles from './styles.module.css';
import { Controller, FormProvider, useForm } from 'react-hook-form';

interface Country {
    cognitoId: string;
    code: string;
    name: string;
    phoneCode: string;
    flag: string;
}

const PROGRAMS = [
    { label: 'Obavezni program - Mlađe djevojčice' },
    { label: 'Neobavezni program - Djevojčice' },
];

export interface Applicant {
    firstName: string;
    lastName: string;
    country: Country;
    programCategory: string;
    club: string;
    teamName: string;
    phone: string;
    dateOfBirth: string;
    movie: string;
}

export default function HomePage() {
    const methods = useForm<Applicant>();
    const [countries, setCountries] = useState<Country[]>([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [phonePrefix, setPhonePrefix] = useState('');

    useEffect(() => {
        axiosInstance.get('countries').then(data => setCountries(data.data));
    }, []);

    const onSubmit = (data: Applicant) => {
        console.log(data);
    };

    return (
        <div className={styles.container}>
            <HeaderComponent />

            <main className={styles.main}>
                <div className={styles.titleContainer}>
                    <h1>My Applications</h1>

                    <div className={styles.buttonContainer}>
                        <Button onClick={() => console.log('esis')} variant='alert'>
                            <p>New application</p>
                        </Button>
                        <Button onClick={() => console.log('esis')} variant='info'>
                            <div className={styles.row}>
                                <div className={styles.greenDot} />
                                <p>Open</p>
                            </div>
                        </Button>
                    </div>
                </div>

                <EmptyListComponent onCLick={handleOpen} />
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-apply-gymnast'
                className={styles.overlay}
            >
                <Box className={styles.modalContent}>
                    <div className={styles.modalTitle}>
                        <h2>Apply gymnast</h2>
                        <Button onClick={handleClose} variant='clear'>
                            <img src={closeIcon} alt='close icon' />
                        </Button>
                    </div>
                    <FormProvider {...methods}>
                        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
                            <Box className={styles.boxRow}>
                                <StyledTextField
                                    id='firstName'
                                    variant='outlined'
                                    placeholder='Enter name'
                                    label='First name'
                                    InputLabelProps={{ shrink: true }}
                                    {...methods.register('firstName', { required: true })}
                                />
                                <StyledTextField
                                    id='lastName'
                                    variant='outlined'
                                    placeholder='Enter last name'
                                    label='Last name'
                                    InputLabelProps={{ shrink: true }}
                                    {...methods.register('lastName', { required: true })}
                                />
                                <Controller
                                    name='country'
                                    control={methods.control}
                                    defaultValue={undefined}
                                    rules={{ required: true }}
                                    render={({ field }) => {
                                        const { onChange, value, ref } = field;
                                        return (
                                            <StyledAutocomplete
                                                id='country'
                                                options={countries}
                                                popupIcon={
                                                    <img src={icArrow} alt='dropdown arrow' />
                                                }
                                                clearIcon={false}
                                                getOptionLabel={option =>
                                                    `${(option as { flag: string }).flag} ${
                                                        (option as { code: string }).code
                                                    }`
                                                }
                                                renderOption={(props, option) => (
                                                    <Box
                                                        component='li'
                                                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                                        {...props}
                                                    >
                                                        {(option as { flag: string }).flag}{' '}
                                                        {(option as { code: string }).code}
                                                    </Box>
                                                )}
                                                renderInput={params => (
                                                    <TextField
                                                        {...params}
                                                        label='Country'
                                                        placeholder='Select existing'
                                                        InputLabelProps={{ shrink: true }}
                                                        ref={ref}
                                                    />
                                                )}
                                                value={
                                                    value
                                                        ? countries.find(option => {
                                                              return (
                                                                  value.phoneCode ===
                                                                  option.phoneCode
                                                              );
                                                          }) ?? null
                                                        : null
                                                }
                                                onChange={(_, newValue) => {
                                                    setPhonePrefix(
                                                        (newValue as { phoneCode: string })
                                                            .phoneCode
                                                    );
                                                    onChange(newValue);
                                                }}
                                            />
                                        );
                                    }}
                                />
                            </Box>
                            <Box className={styles.boxRow}>
                                <Controller
                                    name='programCategory'
                                    control={methods.control}
                                    defaultValue={undefined}
                                    rules={{ required: true }}
                                    render={({ field }) => {
                                        const { onChange, value, ref } = field;
                                        return (
                                            <StyledAutocomplete
                                                options={PROGRAMS}
                                                popupIcon={
                                                    <img src={icArrow} alt='dropdown arrow' />
                                                }
                                                clearIcon={false}
                                                getOptionLabel={option =>
                                                    (option as { label: string }).label
                                                }
                                                renderInput={params => (
                                                    <TextField
                                                        {...params}
                                                        placeholder='Select program and category'
                                                        label='Program and category'
                                                        InputLabelProps={{ shrink: true }}
                                                        ref={ref}
                                                    />
                                                )}
                                                value={
                                                    value
                                                        ? PROGRAMS.find(option => {
                                                              return value === option.label;
                                                          }) ?? null
                                                        : null
                                                }
                                                onChange={(_, newValue) => {
                                                    onChange(
                                                        newValue
                                                            ? (newValue as { label: string }).label
                                                            : null
                                                    );
                                                }}
                                            />
                                        );
                                    }}
                                />

                                <CustomDatePicker />
                            </Box>

                            <Box className={styles.boxRow}>
                                <StyledTextField
                                    id='club'
                                    variant='outlined'
                                    label='Club (optional)'
                                    placeholder='Enter club name'
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ flex: 2 }}
                                    {...methods.register('club')}
                                />
                                <StyledTextField
                                    id='teamName'
                                    variant='outlined'
                                    label='Team (optional)'
                                    placeholder='Team name'
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ flex: 2 }}
                                    {...methods.register('teamName')}
                                />
                            </Box>

                            <Box className={styles.boxRow}>
                                <StyledTextField
                                    id='phone'
                                    variant='outlined'
                                    label='Phone (optional)'
                                    placeholder='Phone number'
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <p>+{phonePrefix}</p>
                                            </InputAdornment>
                                        ),
                                    }}
                                    {...methods.register('phone')}
                                />
                            </Box>

                            <Box className={styles.boxDivider} />

                            <Box className={styles.modalButtons}>
                                <Button onClick={handleClose} variant='clear-underline'>
                                    <p>Cancel</p>
                                </Button>
                                <Button variant='alert' type='submit'>
                                    <p>Save</p>
                                </Button>
                            </Box>
                        </form>
                    </FormProvider>
                </Box>
            </Modal>
        </div>
    );
}
