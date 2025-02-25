import fs from "fs";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

const extractText = async (filePath, fileType) => {
  try {
    if (fileType === "pdf") {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdfParse(dataBuffer);
      return data.text;
    } else if (fileType === "docx") {
      const result = await mammoth.extractRawText({ path: filePath });
      return result.value;
    } else if (fileType === "txt") {
      return fs.readFileSync(filePath, "utf8");
    } else {
      throw new Error("Unsupported file type");
    }
  } catch (error) {
    console.error("Error extracting text:", error);
    return "";
  }
};

export { extractText };
