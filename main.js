module.exports = async (req, res) => {
    const payload =
      req.payload ||
      'No payload provided. Add custom data when executing function.';
  
    const secretKey =
      req.variables.SECRET_KEY ||
      'SECRET_KEY variable not found. You can set it in Function settings.';
  
    const trigger = req.variables.APPWRITE_FUNCTION_TRIGGER;
  
    res.json(data);
  };