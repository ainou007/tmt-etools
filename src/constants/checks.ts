export const listOfChecks = [
  {
    title: 'Uncoded charachters',
    description: 'Verify if the source code contains any unencoded characters.',
  },
  {
    title: ' Pre-header and title ',
    description:
      'For SQL emails, ensure the title and pre-header sections contain "PH" and are not empty. For other emails, verify these sections are not empty, contain "PH", and have consistent content.',
  },
  {
    title: 'Footer and header',
    description: 'Verify that the correct header and footer are present.',
  },
  {
    title: 'Logo brand (OK/OB)',
    description: 'Verify if the logo is correct and if it includes the asterisk.',
  },
  {
    title: 'Default Asterisk',
    description: 'Verify if the French condition exists, considering the type of mail (SQL or translation) and whether the brand is OK or OB.',
  },
  {
    title: 'Links',
    description: 'Verify that all links are correct',
  },
  {
    title: 'Conditions',
    description: 'Verify if the conditions exists, considering the type of mail (SQL or translation) and whether the brand is OK or OB.',
  },
  {
    title: 'Notify Mail Code',
    description: 'Verify if the "notify mail code"  is exist',
  },
  {
    title: 'Online images',
    description: 'Verify if the images are hosted',
  },
];
