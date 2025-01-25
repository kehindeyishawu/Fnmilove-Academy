import { convert } from "html-to-text";


export default function generateDescription(content, maxLength = 160) {
    const plainTextContent = convert(content);
    if (plainTextContent.length <= maxLength) {
        return plainTextContent;
    }
    const truncated = plainTextContent.substring(0, maxLength);
    return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
}
