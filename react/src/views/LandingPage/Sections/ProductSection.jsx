import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Digital Assests at a Glance.</h2>
            <h5 className={classes.description}>
              Popularly known as Cryptocurrencies, the creation of Digital Assets began with bitcoin in 2008 in lue of the year's financial crisis. Through adoption in Asia, the America's and a growing number 
              of geopolitically endangered countries, coins like bitcoin, provide a trusted ecosystem for individuals to protect their value trusted across millions of people. 
              Millionss of individuals trust these digital assests and no one government or institution control their value or accumilation.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Investments"
                description="Explore differenct Digtial Assets and investment instruments to diversify and grow your own wealth along with world changing technologies."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="1-on-1 Education/Seminar"
                description="Learn all about Digital Assets and what they mean for individuals and business owners. How they can be used in your everyday operations and purchasing."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Retail Integration"
                description="Discover different Point-of-Sale options using the leading Cryptocurrencies for fast and easy transactions. Save on bookkeeping and processing."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
