import firestore from '@react-native-firebase/firestore';

export const getDefaultCategories = () => {
  return [
    {
      id: 0,
      name: 'Alimentação',
      color: '#1abc9c',
      isDebit: true,
      order: 0,
    },
    {
      id: 1,
      name: 'Restaurantes e Bares',
      color: '#2ecc71',
      isDebit: true,
      order: 1,
    },
    {
      id: 2,
      name: 'Casa',
      color: '#3498db',
      isDebit: true,
      order: 2,
    },
    {
      id: 3,
      name: 'Compras',
      color: '#9b59b6',
      isDebit: true,
      order: 3,
    },
    {
      id: 4,
      name: 'Cuidados Pessoais',
      color: '#f1c40f',
      isDebit: true,
      order: 4,
    },
    {
      id: 5,
      name: 'Dívidas e Empréstimos',
      color: '#f39c12',
      isDebit: true,
      order: 5,
    },
    {
      id: 6,
      name: 'Educação',
      color: '#e67e22',
      isDebit: true,
      order: 6,
    },
    {
      id: 7,
      name: 'Famíllia e Filhos',
      color: '#d35400',
      isDebit: true,
      order: 7,
    },
    {
      id: 8,
      name: 'Impostos e Taxas',
      color: '#e74c3c',
      isDebit: true,
      order: 8,
    },
  ];
};

export const getInitCategories = async () => {
  const querySnapshot = await firestore()
    .collection('category')
    .where('isInit', '==', true)
    .get();

  if (querySnapshot.docs.length <= 0) {
    return querySnapshot.docs;
  } else {
    return getDefaultCategories();
  }
};
