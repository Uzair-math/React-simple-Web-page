import moment from 'moment';

export default (req, res) => {
  const dummyRuns = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    timestamp: moment().subtract(index, 'hours').toISOString(),
    status: index % 2 === 0 ? 'pass' : 'fail',
  }));

  setTimeout(() => {
    res.status(200).json(dummyRuns);
  }, 1000);
};
