import MyCard from "./Card";

export default function Cards() {
  const example = {
    id: 1,
    title: 'נגריית ים המלח',
    createdTime: '2023-09-20 20:53:00',
    imgUrl: 'https://www.היערהשחורגרמניה.com/wp-content/uploads/2016/03/chala-for-shabbat-3-1321701.jpg',
    subtitle: 'חלות טעימות מאוד',
    phone: '053-8989456456',
    email: 'abcdef@gmail.com',
  };

  return (
    <div>
        <h3 className="tempTitle">צפייה בכל הכרטיסים (דף ראשי)</h3>
        <MyCard card={example} />
    </div>
  )
}
