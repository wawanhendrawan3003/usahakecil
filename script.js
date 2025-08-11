function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const notice = document.getElementById('formNotice');

  if(!name || !phone || !message){
    notice.textContent = 'Mohon lengkapi semua kolom yang diperlukan.';
    return false;
  }

  const waMessage = encodeURIComponent(`Halo, saya ${name}. Saya ingin memesan: ${message}. Kontak: ${phone}`);
  const waLink = `https://wa.me/6281234567890?text=${waMessage}`;

  notice.textContent = 'Membuka WhatsApp untuk melanjutkan pemesanan...';
  window.open(waLink, '_blank');
  return false;
}
