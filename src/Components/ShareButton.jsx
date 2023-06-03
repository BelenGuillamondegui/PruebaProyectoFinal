import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Swal from 'sweetalert';

const ShareButton = () => {
  const shareUrl = 'http://equipamiento-deportivo-static.s3-website.us-east-2.amazonaws.com/';
  const title = '¡Descarga nuestra increíble aplicación!';

  const handleShare = (socialMedia) => {
    // Generar publicación predefinida
    let shareText = '';

    if (socialMedia === 'Facebook') {
      shareText = `${title}\n\n¡Descarga nuestra aplicación desde el siguiente enlace: ${shareUrl}`;
    } else if (socialMedia === 'Instagram') {
      shareText = `${title} - Descarga nuestra aplicación desde el enlace en nuestra biografía: ${shareUrl}`;
    }

    // Mostrar ventana emergente con la publicación predefinida
    Swal({
      title: 'Compartir en redes sociales',
      text: shareText,
      icon: 'info',
      buttons: ['Cancelar', 'Compartir'],
    }).then((result) => {
      if (result) {
        // Redirigir al usuario a la red social correspondiente
        let url = '';

        if (socialMedia === 'Facebook') {
          url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        } else if (socialMedia === 'Instagram') {
          url = `https://www.instagram.com/share?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`;
        }

        window.open(url, '_blank');
      }
    });
  };

  return (
    <div>
      <button onClick={() => handleShare('Facebook')}>
        <FaFacebook size={32} />
      </button>

      <button onClick={() => handleShare('Instagram')}>
        <FaInstagram size={32} />
      </button>
    </div>
  );
};

export default ShareButton;



