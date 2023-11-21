export default function Summary(props) {
  return (
    <>
      <div class="mt-10 ">
        {props.bulletpoints.map((point, index) => {
          return <li key={index}>{point}</li>;
        })}

        <div class="mt-2 flex flex-wrap">
          <p class="text-primary font-bold pr-2">Stack:</p>
          {props.stack.map((item, index) => {
            return (
              <span key={index}>
                <a href={item.url} class="text-primary pr-2 underline">
                  {item.name}
                </a>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
