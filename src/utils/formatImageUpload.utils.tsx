export const formatImageUpload = ({
  fileUri,
  name,
  type,
}: {
  fileUri: string;
  name: string;
  type: string;
}) => {
  return {
    uri: fileUri,
    type,
    name,
  };
};
