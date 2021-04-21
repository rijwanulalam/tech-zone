import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


const ServiceDetail = ({service}) => {
    const history = useHistory();
    const handleButton = (id) =>{
        history.push(`/checkout/${id}`);
    }
    const classes = useStyles();
    return (
        <div className="col-md-4 text-center p-4">
            <div className="shadow-lg p-3 mb-5 rounded">
                <img style={{ height : '90px', backgroundColor: 'white', padding : '1rem', marginBottom: '1rem'}} src={service.serviceImgUrl} alt=""/>
                <h5 className="text-white border border-light">{service.serviceTitle}</h5>
                <p className="text-white">{service.serviceDescription}</p>
                <Button onClick={() => handleButton(service._id)} variant="contained" size="small" color="primary" className={classes.margin}>
                    Book Now
                </Button>
            </div>

        </div>
    );
};

export default ServiceDetail;