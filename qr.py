import qrcode
from PIL import Image

def generate_qr(data, filename="qrcode.png", box_size=10, border=4, fill_color="black", back_color="white"):
    """
    Generate a QR code image
    
    Args:
        data: The data to encode in the QR code
        filename: Output filename (default: qrcode.png)
        box_size: Size of each box in pixels (default: 10)
        border: Border size in boxes (default: 4)
        fill_color: Color of the QR code (default: black)
        back_color: Background color (default: white)
    
    Returns:
        The path to the generated QR code image
    """
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=box_size,
        border=border,
    )
    qr.add_data(data)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color=fill_color, back_color=back_color)
    img.save(filename)
    return filename

if __name__ == "__main__":
    # Example usage
    data = input("Enter the data for the QR code: ")
    filename = input("Enter filename (default: qrcode.png): ") or "qrcode.png"
    
    generate_qr(data, filename)
    print(f"QR code generated and saved as {filename}")