import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt=10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Partners
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Gratitude
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Commerce{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Insights{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Terms{" "}
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <footer className="bg-black-800 text-white py-4">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <p className="text-sm text-center mb-2">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </footer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
