import { useState } from 'react';
import Dashboard from './ui/Dashboard';
import Header from './ui/Header';
import { getBooks } from './services/api';
import Search from './features/Search';
import ResultsCount from './ui/ResultsCount';

const App = () => {
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const clearData = () => {
    setBooksData([]);
    setError('');
  };

  const getDataSorted = (books) => {
    const sortedData = books.reduce(
      (
        result,
        {
          key,
          title,
          cover_i,
          author_name,
          first_publish_year,
          language,
          ratings_average,
          first_sentence,
        },
      ) => {
        const publishedValue = first_publish_year;
        const firstSentence = first_sentence?.at(0);
        const averageRating = ratings_average?.toFixed(2);

        const data = {
          key,
          title: title,
          cover: cover_i,
          author_name,
          published: publishedValue,
          language,
          first_sentence: firstSentence,
          avg_rating: averageRating,
        };

        return [...result, data];
      },
      [],
    );

    return sortedData;
  };

  const handleSubmit = async (search) => {
    clearData();

    const query = search.replace(' ', '+');

    if (search) {
      setIsLoading(true);
    } else {
      setError('Please enter a valid book name');
      return;
    }

    const res = await getBooks(query);

    if (!res.docs || res.error) {
      setError(res.error);
    }

    if (res.docs.length > 0) {
      const sortedData = getDataSorted(res.docs);
      setBooksData((booksData) => [...booksData, ...sortedData]);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Header>
        <Search handleSubmit={handleSubmit} />
        <ResultsCount results={booksData?.length} />
      </Header>
      <Dashboard isLoading={isLoading} error={error} booksData={booksData} />
    </div>
  );
};

export default App;
