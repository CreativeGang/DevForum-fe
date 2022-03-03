const filter = ['Category', 'Tags', 'SortBy'];

const CategoryList = {
  Category: [
    { key: 1, name: 'Frontend', color: '#f9bc64', topic: filter[0] },
    { key: 2, name: 'Backend', color: '#FF755A', topic: filter[0] },
    { key: 3, name: 'Web Design', color: '#4436f8', topic: filter[0] },
    { key: 4, name: 'Q&A', color: '#5dd39e', topic: filter[0] },
  ],
};

const TagsList = {
  Tags: [
    { key: 1, name: 'HTML', color: '#f9bc64', topic: filter[1] },
    { key: 2, name: 'CSS', color: '#FF755A', topic: filter[1] },
    { key: 3, name: 'JAVA', color: '#4436f8', topic: filter[1] },
    { key: 4, name: 'JAVASCRIPT', color: '#5dd39e', topic: filter[1] },
  ],
};
const SortBy = {
  SortBy: [
    { key: 1, name: 'MostLiked', topic: 'MostLiked' },
    { key: 2, name: 'Latest', topic: 'Latest' },
  ],
};
export const FilterList = [{ ...CategoryList }, { ...TagsList }, { ...SortBy }];

export const FilterName = ['Category', 'Tags', 'SortBy'];
