/**
 * Templates Module
 */

const Templates = (() => {
  const templates = {
    modernLiving: {
      name: I18N.t('modernLiving'),
      description: 'Contemporary furniture for modern living spaces',
      pages: [
        {
          id: 'p_content_1',
          type: 'content',
          room: 'LIVING ROOM',
          items: [
            {
              id: Utils.generateId('item'),
              supplier: 'B&B Italia',
              collection: 'Camaleonda',
              name: 'Modular Sofa',
              material: 'Fabric upholstery',
              colour: 'Charcoal grey',
              dimensions: '340 cm (W) × 160 cm (D)',
              care: 'Vacuum regularly, professional cleaning recommended',
              link: 'bebitalia.com',
              notes: '',
              img: '',
              price: 8500
            }
          ]
        }
      ]
    },
    
    minimalistBedroom: {
      name: I18N.t('minimalistBedroom'),
      description: 'Clean lines and functional design for the bedroom',
      pages: [
        {
          id: 'p_content_2',
          type: 'content',
          room: 'BEDROOM',
          items: [
            {
              id: Utils.generateId('item'),
              supplier: 'Muji',
              collection: 'Oak Series',
              name: 'Platform Bed',
              material: 'Solid oak wood',
              colour: 'Natural',
              dimensions: '200 cm × 160 cm',
              care: 'Wipe with dry cloth',
              link: 'muji.com',
              notes: '',
              img: '',
              price: 1200
            }
          ]
        }
      ]
    }
  };

  const getTemplatesList = () => {
    return Object.entries(templates).map(([key, template]) => ({
      key,
      name: template.name,
      description: template.description
    }));
  };

  const getTemplate = (key) => {
    return templates[key] ? Utils.deepClone(templates[key]) : null;
  };

  return {
    getTemplatesList,
    getTemplate
  };
})();
