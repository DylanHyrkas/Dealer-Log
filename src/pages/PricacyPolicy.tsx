import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { jsPDF } from "jspdf";

const PrivacyPolicy: React.FC = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Privacy Policy for DealersVault", 10, 10);
    doc.setFontSize(12);
    doc.text(
      `
      Effective Date: 12/12/24
      
      DealersVault ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our web app. By using DealersVault, you agree to the practices described in this Privacy Policy.
      
      1. Information We Collect
      - Mandatory Information:
        - Email address (used to create and manage your account).
      - Optional Information:
        - First Name and Last Name.
        - Role (e.g., admin or user).
        - Profile Picture.
      
      2. How We Collect Your Information
      - During Account Creation: When you sign up for an account.
      - Through Account Updates: When you edit or update your profile information.
      
      3. How We Use Your Information
      - Create and manage your user account.
      - Enable and personalize your user profile.
      - Allow you to access and edit your account information.
      
      4. User Rights
      - Access Your Data: You can view all the information associated with your account.
      - Edit Your Data: You can update or edit your profile information at any time.
      - Request Changes: You may request changes to your data by contacting us at dylhyrkas@gmail.com.
      
      5. Data Sharing and Security
      - Data Sharing: We do not share your personal data with third parties unless required by law.
      - Data Storage: Your data is securely stored using Supabase, a secure and reliable backend platform.
      - Data Security: Supabase uses industry-standard security measures to protect your information, including encryption and regular security audits.
      
      6. Use of Cookies and Tracking
      We do not currently use cookies, tracking pixels, or similar technologies to monitor user activity.
      
      7. Age Restrictions
      DealersVault is not intended for users under the age of 13. By using our app, you confirm that you are 13 years of age or older.
      
      8. Changes to This Privacy Policy
      We may update this Privacy Policy from time to time. When we make changes, we will revise the "Effective Date" at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your data.
      
      9. Contact Us
      If you have any questions about this Privacy Policy or your data, please contact us at dylhyrkas@gmail.com.
      
      © DealersVault. All Rights Reserved.
      `,
      10,
      20,
      { maxWidth: 190 }
    );
    doc.save("PrivacyPolicy_DealersVault.pdf");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Privacy Policy for DealersVault
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line", marginBottom: 3 }}>
        Effective Date: 12/12/24

        DealersVault ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our web app. By using DealersVault, you agree to the practices described in this Privacy Policy.

        1. Information We Collect
        - Mandatory Information:
          - Email address (used to create and manage your account).
        - Optional Information:
          - First Name and Last Name.
          - Role (e.g., admin or user).
          - Profile Picture.

        2. How We Collect Your Information
        - During Account Creation: When you sign up for an account.
        - Through Account Updates: When you edit or update your profile information.

        3. How We Use Your Information
        - Create and manage your user account.
        - Enable and personalize your user profile.
        - Allow you to access and edit your account information.

        4. User Rights
        - Access Your Data: You can view all the information associated with your account.
        - Edit Your Data: You can update or edit your profile information at any time.
        - Request Changes: You may request changes to your data by contacting us at dylhyrkas@gmail.com.

        5. Data Sharing and Security
        - Data Sharing: We do not share your personal data with third parties unless required by law.
        - Data Storage: Your data is securely stored using Supabase, a secure and reliable backend platform.
        - Data Security: Supabase uses industry-standard security measures to protect your information, including encryption and regular security audits.

        6. Use of Cookies and Tracking
        We do not currently use cookies, tracking pixels, or similar technologies to monitor user activity.

        7. Age Restrictions
        DealersVault is not intended for users under the age of 13. By using our app, you confirm that you are 13 years of age or older.

        8. Changes to This Privacy Policy
        We may update this Privacy Policy from time to time. When we make changes, we will revise the "Effective Date" at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your data.

        9. Contact Us
        If you have any questions about this Privacy Policy or your data, please contact us at dylhyrkas@gmail.com.

        © DealersVault. All Rights Reserved.
      </Typography>
      <Button variant="contained" color="primary" onClick={generatePDF}>
        Download as PDF
      </Button>
    </Box>
  );
};

export default PrivacyPolicy;