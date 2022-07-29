import Tetris from "../common/Tetris.js";
import R from "../common/ramda.js";

const tetrominos = [
    "I_tetromino",
    "J_tetromino",
    "L_tetromino",
    "O_tetromino",
    "S_tetromino",
    "T_tetromino",
    "Z_tetromino"
];

const tetrominos_except_O = [
    "I_tetromino",
    "J_tetromino",
    "L_tetromino",
    "S_tetromino",
    "T_tetromino",
    "Z_tetromino"
];

describe("Rotation: (not near an edge or blocks)", function () {
    const rotate_cw_1 = Tetris.rotate_cw;
    const rotate_cw_2 = R.pipe(rotate_cw_1, Tetris.rotate_cw);
    const rotate_cw_3 = R.pipe(rotate_cw_2, Tetris.rotate_cw);
    const rotate_cw_4 = R.pipe(rotate_cw_3, Tetris.rotate_cw);

    const rotate_ccw_1 = Tetris.rotate_ccw;
    const rotate_ccw_2 = R.pipe(rotate_ccw_1, Tetris.rotate_ccw);
    const rotate_ccw_3 = R.pipe(rotate_ccw_2, Tetris.rotate_ccw);
    const rotate_ccw_4 = R.pipe(rotate_ccw_3, Tetris.rotate_ccw);

    describe("Rotating CW once;", function () {
        describe("Is equivalent to rotating CCW thrice;", function () {
            it("For all tetrominos;", function () {
                tetrominos.forEach(function (tetromino_label) {
                    const original = Tetris.new_game();
                    original.current_tetromino = Tetris[tetromino_label];
                    original.position = [5, 10];

                    const rotated_CW_1 = rotate_cw_1(original);
                    const rotated_CCW_3 = rotate_ccw_3(original);

                    if (!R.equals(rotated_CW_1, rotated_CCW_3)) {
                        throw new Error(`Rotating the ${tetromino_label}
                        Was not equavalent, once CW to thrice CCW.
                        Original:      ${JSON.stringify(original)}
                        Rotated_CW_1:  ${JSON.stringify(rotated_CW_1)}
                        Rotated_CCW_3: ${JSON.stringify(rotated_CCW_3)}
                        `);
                    }
                });
            });
        });

        describe("Is distinct from not rotating;", function () {
            it("For all tetrominos except O;", function () {
                tetrominos_except_O.forEach(function (tetromino_label) {
                    const original = Tetris.new_game();
                    original.current_tetromino = Tetris[tetromino_label];
                    original.position = [5, 10];

                    const rotated_CW_1 = rotate_cw_1(original);

                    if (R.equals(rotated_CW_1, original)) {
                        throw new Error(`Rotating the ${tetromino_label}
                        Was equavalent, once CW to not rotating.
                        Original:      ${JSON.stringify(original)}
                        Rotated_CW_1:  ${JSON.stringify(rotated_CW_1)}
                        `);
                    }
                });
            });
        });

        describe("Is equivalent to not rotating;", function () {
            it("For the O tetromino;", function () {
                const original = Tetris.new_game();
                original.current_tetromino = Tetris.O_tetromino;
                original.position = [5, 10];

                const rotated_CW_1 = rotate_cw_1(original);

                if (!R.equals(rotated_CW_1, original)) {
                    throw new Error(`Rotating the O_tetromino
                    Was not equavalent, once CW to not rotating.
                    Original:      ${JSON.stringify(original)}
                    Rotated_CW_1:  ${JSON.stringify(rotated_CW_1)}
                    `);
                }
            });
        });
    });

    describe("Rotating CW twice;", function () {
        describe("Is equivalent to rotating CCW twice;", function () {
            it("For all tetrominos;", function () {
                tetrominos.forEach(function (tetromino_label) {
                    const original = Tetris.new_game();
                    original.current_tetromino = Tetris[tetromino_label];
                    original.position = [5, 10];

                    const rotated_CW_2 = rotate_cw_2(original);
                    const rotated_CCW_2 = rotate_ccw_2(original);

                    if (!R.equals(rotated_CW_2, rotated_CCW_2)) {
                        throw new Error(`Rotating the ${tetromino_label}
                        Was not equavalent, twice CW to twice CCW.
                        Original:      ${JSON.stringify(original)}
                        Rotated_CW_2:  ${JSON.stringify(rotated_CW_2)}
                        Rotated_CCW_2: ${JSON.stringify(rotated_CCW_2)}
                        `);
                    }
                });
            });
        });

        describe("Is distinct from not rotating;", function () {
            it("For all tetrominos except O;", function () {
                tetrominos_except_O.forEach(function (tetromino_label) {
                    const original = Tetris.new_game();
                    original.current_tetromino = Tetris[tetromino_label];
                    original.position = [5, 10];

                    const rotated_CW_2 = rotate_cw_2(original);

                    if (R.equals(rotated_CW_2, original)) {
                        throw new Error(`Rotating the ${tetromino_label}
                        Was equavalent, twice CW to not rotating.
                        Original:      ${JSON.stringify(original)}
                        Rotated_CW_2:  ${JSON.stringify(rotated_CW_2)}
                        `);
                    }
                });
            });
        });
    });

    describe("Rotating CW thrice;", function () {
        describe("Is equivalent to rotating CCW once;", function () {
            it("For all tetrominos;", function () {
                tetrominos.forEach(function (tetromino_label) {
                    const original = Tetris.new_game();
                    original.current_tetromino = Tetris[tetromino_label];
                    original.position = [5, 10];

                    const rotated_CW_3 = rotate_cw_3(original);
                    const rotated_CCW_1 = rotate_ccw_1(original);

                    if (!R.equals(rotated_CW_3, rotated_CCW_1)) {
                        throw new Error(`Rotating the ${tetromino_label}
                        Was not equavalent, thrice CW to once CCW.
                        Original:      ${JSON.stringify(original)}
                        Rotated_CW_3:  ${JSON.stringify(rotated_CW_3)}
                        Rotated_CCW_1: ${JSON.stringify(rotated_CCW_1)}
                        `);
                    }
                });
            });
        });

        describe("Is distinct from not rotating;", function () {
            it("For all tetrominos except O;", function () {
                tetrominos_except_O.forEach(function (tetromino_label) {
                    const original = Tetris.new_game();
                    original.current_tetromino = Tetris[tetromino_label];
                    original.position = [5, 10];

                    const rotated_CW_3 = rotate_cw_3(original);

                    if (R.equals(rotated_CW_3, original)) {
                        throw new Error(`Rotating the ${tetromino_label}
                        Was equavalent, thrice CW to not rotating.
                        Original:      ${JSON.stringify(original)}
                        Rotated_CW_3:  ${JSON.stringify(rotated_CW_3)}
                        `);
                    }
                });
            });
        });
    });

    describe("Rotating CW fourfold;", function () {
        describe("Is equivalent to not rotating;", function () {
            it("For all tetrominos;", function () {
                tetrominos.forEach(function (tetromino_label) {
                    const original = Tetris.new_game();
                    original.current_tetromino = Tetris[tetromino_label];
                    original.position = [5, 10];

                    const rotated_CW_4 = rotate_cw_4(original);

                    if (!R.equals(rotated_CW_4, original)) {
                        throw new Error(`Rotating the ${tetromino_label}
                        Was not equavalent, fourfold CW to not rotating.
                        Original:      ${JSON.stringify(original)}
                        Rotated_CW_4:  ${JSON.stringify(rotated_CW_4)}
                        `);
                    }
                });
            });
        });
    });

    describe("Rotating CCW fourfold;", function () {
        describe("Is equivalent to not rotating;", function () {
            it("For all tetrominos;", function () {
                tetrominos.forEach(function (tetromino_label) {
                    const original = Tetris.new_game();
                    original.current_tetromino = Tetris[tetromino_label];
                    original.position = [5, 10];

                    const rotated_CCW_4 = rotate_ccw_4(original);

                    if (!R.equals(rotated_CCW_4, original)) {
                        throw new Error(`Rotating the ${tetromino_label}
                        Was not equavalent, fourfold CW to not rotating.
                        Original:      ${JSON.stringify(original)}
                        Rotated_CCW_4:  ${JSON.stringify(rotated_CCW_4)}
                        `);
                    }
                });
            });
        });
    });
});
