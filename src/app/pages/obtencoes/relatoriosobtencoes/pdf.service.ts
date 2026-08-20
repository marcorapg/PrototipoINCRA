import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  async open(
    elementId: string,
    orientation: 'portrait' | 'landscape' = 'portrait'
  ): Promise<void> {

    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element '${elementId}' not found.`);
    }

    // Ativa o modo de exportação
    element.classList.add('pdf-export');

    try {

      // Aguarda o navegador aplicar o novo CSS
      await new Promise(resolve => requestAnimationFrame(resolve));

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const pdf = new jsPDF({
        orientation,
        unit: 'mm',
        format: orientation === 'landscape' ? 'a3' : 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight,
        undefined,
        'FAST'
      );

      heightLeft -= pageHeight;

      while (heightLeft > 0) {

        position = heightLeft - imgHeight;

        pdf.addPage();

        pdf.addImage(
          canvas.toDataURL('image/png'),
          'PNG',
          0,
          position,
          imgWidth,
          imgHeight,
          undefined,
          'FAST'
        );

        heightLeft -= pageHeight;
      }

      const blob = pdf.output('blob');
      const url = URL.createObjectURL(blob);

      window.location.replace(url);

    } finally {

      // Restaura o layout original
      element.classList.remove('pdf-export');

    }
  }

}