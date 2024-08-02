const dateFormat = (date: string) => {
  const options = { year: "numeric", month: "short", day: "numeric" } as any;
  return new Date(date).toLocaleDateString("en-US", options);
};

export default dateFormat;
