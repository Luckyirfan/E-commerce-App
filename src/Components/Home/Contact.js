import React from 'react';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
    return (
        
        <TableContainer className="contact-info">
        <Typography variant="h4">Lucky Multiservices Head Office</Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  Lucky Digital Services Private Limited
                  <br />
                  Peer Burhan Nagar, Galli No.16
                  <br />
                  Nanded Maharashtra - Pin-431605
                </Typography>
              </TableCell>
            {/* </TableRow>
            <TableRow> */}
              <TableCell>
                <Typography variant="body1">
                  <PhoneIcon /> Call Us: 9146756509
                  <br />
                  <MailOutlineIcon /> Write to Us:{' '}
                  <a href="mailto:irfanshah676@gmail.com">irfanshah676@gmail.com</a>
                  <br />
                  <PhoneIcon /> Customer Helpline No: 0124-0008888
                  <br />
                  <WhatsAppIcon /> Say 'Hi' at Whatsapp: 9146756509
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
       
    );
};

export default Contact;