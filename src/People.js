export const People = () => {
    return (
        <div>
            <form>
                <label>
                    <p>Введите имя:</p>
                    <input
                        type="text"
                    />
                </label>

                <label>
                    <p className="text-input">Выберите класс</p>
                    <select>
                        <option>Воин</option>
                        <option>Рога</option>
                        <option>Маг</option>
                    </select>
                </label>

                <label>
                    <p className="text-input">Введите уровень:</p>
                    <input
                        type="number"
                    />
                </label>
                <br />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}