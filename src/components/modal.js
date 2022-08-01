/** @jsxRuntime classic */
/** @jsx jsx */
import {useState} from 'react';
import Modal from 'react-modal';
import {useFormik} from 'formik'
import * as yup from 'yup';
import { toast } from 'react-toastify';
import {
  Grid, Box, Input, Label,
  Select, Textarea, jsx,
} from 'theme-ui';
import getIndustries from '../utils/getIndustries';
import countriesData from '../data/countries.json';

Modal.setAppElement('#__next');

const scheduleRequestURL = `${process.env.NEXT_PUBLIC_LUGAH_SCHEDULE_BASE_URL}/schedule-demo`;

const schema = yup.object().shape({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string(),
  location: yup.string(),
  industry: yup.string(),
  company: yup.string(),
  requestedDate: yup.string(),
  moreInfo: yup.string(),
  template: yup.string(),
})

const CustomModal = ({
 modalIsOpen,
 afterOpenModal,
 closeModal,
 subtitle
}) => {
  const industries = getIndustries();
  const [loading, setLoading] = useState(false);
  const [countries] = useState(countriesData.map(country => ({
    text: country.name,
    value: country.name,
  })));
  const formikInstance = useFormik({
    validationSchema: schema,
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      location: '',
      industry: '',
      company: '',
      requestedDate: '',
      moreInfo: '',
      template: '',
    },
    onSubmit: async (values) => {
      setLoading(true);
      const id = toast.loading('Please wait...')
      const scheduleRequest = {
        ...values,
        requestedDate: new Date(Date.now() + 86000000),
        template: 'AIDML Website Enquiry',
      }
      const res = await fetch(scheduleRequestURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scheduleRequest),
      }).catch((e) => {
        toast.update(id, {
          render: e.message,
          type: 'error',
          isLoading: false,
          autoClose: 8000
        });
        setLoading(false);
      });
      if (res) {
        const data = await res.json();
        if (data.success) {
          toast.update(id, {
            render: `Success - ${data.message}`,
            type: 'success',
            isLoading: false,
            autoClose: 8000
          })
          setLoading(false);
          modalIsOpen = false;
        } else {
          toast.update(id, {
            render: `Error - ${data.message}`,
            type: 'error',
            isLoading: false,
            autoClose: 8000
          })
          setLoading(false);
        }
      }
    },
  })

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={styles.customStyles}
      contentLabel="Contact Us"
      preventScroll={true}
    >
      <h4 sx={styles.heading} ref={(_subtitle) => (subtitle = _subtitle)}>Get in touch with us</h4>
      <Grid columns={[1, null, 2]} sx={styles.grid}>
        <Box>
          <Label>First Name <span>*</span></Label>
          <Input
            style={formikInstance.errors.firstname ? styles.error : {}}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
            value={formikInstance.values.firstname}
            name='firstname'
            placeholder='First name'
          />
        </Box>
        <Box>
          <Label>Last Name <span>*</span></Label>
          <Input
            style={formikInstance.errors.lastname ? styles.error : {}}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
            value={formikInstance.values.lastname}
            name='lastname'
            placeholder='Last name'
          />
        </Box>
        <Box>
          <Label>Email <span>*</span></Label>
          <Input
            style={formikInstance.errors.email ? styles.error : {}}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
            value={formikInstance.values.email}
            name='email'
            placeholder='Email'
          />
        </Box>
        <Box>
          <Label>Location <span>*</span></Label>
          <Select
            style={formikInstance.errors.location ? styles.error : {}}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
            value={formikInstance.values.location}
            name="location"
            arrow={
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentcolor"
                sx={{
                  ml: -28,
                  alignSelf: 'center',
                  pointerEvents: 'none',
                }}>
                <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"/>
              </Box>
            }
            placeholder="Select a location">
            {
              countries.map((country) => (
                <option value={country.value} key={country.value}>{country.text}</option>
              ))
            }
          </Select>
        </Box>
        <Box>
          <Label>Phone</Label>
          <Input
            style={formikInstance.errors.phone ? styles.error : {}}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
            value={formikInstance.values.phone}
            name='phone'
            placeholder='Phone number'
          />
        </Box>
        <Box>
          <Label>Industry</Label>
          <Select
            style={formikInstance.errors.industry ? styles.error : {}}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
            value={formikInstance.values.industry}
            name="industry"
            arrow={
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentcolor"
                sx={{
                  ml: -28,
                  alignSelf: 'center',
                  pointerEvents: 'none',
                }}>
                <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"/>
              </Box>
            }
            placeholder="Select an industry">
            {
              industries.map((industry) => (
                <option value={industry} key={industry}>{industry}</option>
              ))
            }
          </Select>
        </Box>
        <Box>
          <Label>Company</Label>
          <Input
            style={formikInstance.errors.company ? styles.error : {}}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
            value={formikInstance.values.company}
            name='company'
            placeholder='Company'
          />
        </Box>
        <Box>
          <Label>Additional Info/Enquiry</Label>
          <Textarea
            type="textarea"
            style={formikInstance.errors.moreInfo ? styles.error : {}}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
            value={formikInstance.values.moreInfo}
            name='moreInfo'
            placeholder='Additional info'
          />
        </Box>
      </Grid>
      <button disabled={loading} sx={styles.primary} onClick={formikInstance.handleSubmit}>Send</button>
      <button sx={styles.secondary} onClick={closeModal}>Close</button>
    </Modal>
  )
};

const styles = {
  grid: {
    paddingBottom: '1.25rem',
    'select, textarea, input': {
      border: '1px solid #F3F4F5',
      color: '#000000',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '14px'
    },
    'label': {
      color: '#6b6b6b',
      padding: '.25rem 0',
      fontWeight: 400,
      'span': {
        color: 'red',
        marginLeft: '5px',
      }
    },
    'input': {
      padding: '0 10px',
      height: '50px',
    }
  },
  heading: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#000'
  },
  customStyles: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: 'auto',
      height: '60%'
    },
  },
  primary: {
    border: 'none',
    background: '#7B28FF',
    minHeight: '40px',
    borderRadius: 0,
    fontFamily: 'body',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s ease-in-out 0s',
    color: 'white',
    padding: ['0 25px', null, null, '0 30px'],
    marginRight: 2,
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#7B28FF',
    }
  },
  secondary: {
    border: 'none',
    background: '#5b5b5b',
    minHeight: '40px',
    borderRadius: 0,
    fontFamily: 'body',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s ease-in-out 0s',
    color: 'white',
    padding: ['0 25px', null, null, '0 30px'],
  },
  error: {
    border: '1px solid red'
  }
}

export default CustomModal;

