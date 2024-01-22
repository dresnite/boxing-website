export default function NavLink({link, text}: {link: string, text: string}) {
  return (
    <div className="group">
      <a href={link}>{ text }</a>
      <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-red-500 group-hover:opacity-100"></div>
    </div>
  );
}
