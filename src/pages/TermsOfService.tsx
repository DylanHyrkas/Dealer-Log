import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { jsPDF } from "jspdf";

const TermsOfService: React.FC = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Terms of Service for DealersVault", 10, 10);
    doc.setFontSize(12);
    doc.text(
      `
      Effective Date: 12/12/24

      Welcome to DealersVault ("we," "our," or "us"). By accessing or using our services ("Services"), you agree to the following Terms of Service ("Terms"). If you do not agree to these Terms, please discontinue using our Services.

      1. Acceptance of Terms
      - By accessing DealersVault, you confirm that you are at least 13 years old or the age of majority in Michigan.
      - You agree to our Terms and our Privacy Policy.

      2. Account Registration
      - You must provide accurate and complete information when creating an account, including your email address and optional details such as first name, last name, role, and profile picture.
      - You are responsible for maintaining the confidentiality of your account credentials and any activity associated with your account.
      - We reserve the right to suspend or terminate accounts for unauthorized use or violations of these Terms.

      3. Acceptable Use
      - Use DealersVault for lawful purposes only.
      - Prohibited actions include:
        - Attempting to gain unauthorized access to our systems or data.
        - Using the Services to violate laws or regulations.
        - Disrupting the functionality of our Services.

      4. Intellectual Property
      - All content, features, and functionality on DealersVault, including text, logos, and software, are protected by copyright, trademark, and other intellectual property laws.
      - You may not reproduce, distribute, or modify any part of our Services without prior written consent.

      5. Data Collection and Privacy
      - Our Privacy Policy outlines how we collect and use your data. By using DealersVault, you agree to the data practices described in our Privacy Policy.

      6. Data Security
      - We utilize Supabase, a secure backend platform, to store and protect your data.
      - Supabase implements industry-standard security measures, including encryption and regular security audits.

      7. Limitation of Liability
      - DealersVault is not liable for indirect, incidental, or consequential damages resulting from your use of our Services.
      - Our liability is limited to the fees you have paid us in the 12 months prior to the claim.

      8. Changes to the Terms
      - We may update these Terms periodically. Changes will be reflected in the "Effective Date" at the top of this page.
      - Continued use of the Services after updates constitutes your acceptance of the new Terms.

      9. Governing Law
      - These Terms are governed by the laws of Michigan. Disputes will be resolved in Michigan courts.

      10. Contact Us
      - For questions or concerns, contact us at dylhyrkas@gmail.com.

      © 2024 DealersVault. All Rights Reserved.
      `,
      10,
      20,
      { maxWidth: 190 }
    );
    doc.save("TermsOfService_DealersVault.pdf");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Terms of Service for DealersVault
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line", marginBottom: 3 }}>
        Effective Date: 12/12/24

        Welcome to DealersVault ("we," "our," or "us"). By accessing or using our services ("Services"), you agree to the following Terms of Service ("Terms"). If you do not agree to these Terms, please discontinue using our Services.

        1. Acceptance of Terms
        - By accessing DealersVault, you confirm that you are at least 13 years old or the age of majority in Michigan.
        - You agree to our Terms and our Privacy Policy.

        2. Account Registration
        - You must provide accurate and complete information when creating an account, including your email address and optional details such as first name, last name, role, and profile picture.
        - You are responsible for maintaining the confidentiality of your account credentials and any activity associated with your account.
        - We reserve the right to suspend or terminate accounts for unauthorized use or violations of these Terms.

        3. Acceptable Use
        - Use DealersVault for lawful purposes only.
        - Prohibited actions include:
          - Attempting to gain unauthorized access to our systems or data.
          - Using the Services to violate laws or regulations.
          - Disrupting the functionality of our Services.

        4. Intellectual Property
        - All content, features, and functionality on DealersVault, including text, logos, and software, are protected by copyright, trademark, and other intellectual property laws.
        - You may not reproduce, distribute, or modify any part of our Services without prior written consent.

        5. Data Collection and Privacy
        - Our Privacy Policy outlines how we collect and use your data. By using DealersVault, you agree to the data practices described in our Privacy Policy.

        6. Data Security
        - We utilize Supabase, a secure backend platform, to store and protect your data.
        - Supabase implements industry-standard security measures, including encryption and regular security audits.

        7. Limitation of Liability
        - DealersVault is not liable for indirect, incidental, or consequential damages resulting from your use of our Services.
        - Our liability is limited to the fees you have paid us in the 12 months prior to the claim.

        8. Changes to the Terms
        - We may update these Terms periodically. Changes will be reflected in the "Effective Date" at the top of this page.
        - Continued use of the Services after updates constitutes your acceptance of the new Terms.

        9. Governing Law
        - These Terms are governed by the laws of Michigan. Disputes will be resolved in Michigan courts.

        10. Contact Us
        - For questions or concerns, contact us at dylhyrkas@gmail.com.

        © 2024 DealersVault. All Rights Reserved.
      </Typography>
      <Button variant="contained" color="primary" onClick={generatePDF}>
        Download as PDF
      </Button>
    </Box>
  );
};

export default TermsOfService;