import classes from './ItemSummary.module.css';

const ItemsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Welcome to Reactcha</h2>
            <p>
                Your one-stop solution for all things matcha related built using React!
            </p>
            <p>
                Matcha (抹茶, English: /'mætʃə, 'ma:tʃə/; Japanese: [mattɕa]; Mandarin: [mwǒ.ʈʂʰá]; pinyin: mǒchá; Korean: 말차; RR: malcha) is finely ground powder of specially grown and processed green tea leaves, traditionally consumed in East Asia. The green tea plants used for matcha are shade-grown for three to four weeks before harvest; the stems and veins are removed during processing. During shaded growth, the plant Camellia sinensis produces more theanine and caffeine. The powdered form of matcha is consumed differently from tea leaves or tea bags, as it is suspended in a liquid, typically water or milk.
            </p>
        </section>
    );
};

export default ItemsSummary;