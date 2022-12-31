import React, {Fragment} from "react";
import {Story} from "@ladle/react";
import componentDefaults from "../../../defaults/ComponentDefaults";
import Columns from "./Columns";
import {ColumnsProps} from "./Columns.types";
import Column from "../Column";

export default {
    title: "layout",
};

export const Default: Story<ColumnsProps> = ({
    className,
    style
}) => {
    const getColumnContent = (text: string) => {
        return (
            <div
                style={{
                    padding: 15,
                    backgroundColor: '#f4f4f4',
                }}
            >
                {text}
            </div>
        );
    }
    return (
        <Fragment>
            <h3>Columns with equal width</h3>
            <Columns
                className={className}
                style={style}
            >
                <Column>
                    {getColumnContent('col 1')}
                </Column>
                <Column>
                    {getColumnContent('col 2')}
                </Column>
                <Column>
                    {getColumnContent('col 3')}
                </Column>
                <Column>
                    {getColumnContent('col 4')}
                </Column>
            </Columns>
            <h3>Columns with different width</h3>
            <p>Full width on small screens</p>
            <Columns
                className={className}
                style={style}
            >
                <Column
                    size={6}
                    sizeSm={12}
                >
                    {getColumnContent('50%')}
                </Column>
                <Column
                    size={3}
                    sizeSm={12}
                >
                    {getColumnContent('25%')}
                </Column>
                <Column
                    size={3}
                    sizeSm={12}
                >
                    {getColumnContent('25%')}
                </Column>
            </Columns>
        </Fragment>
    )
}

Default.storyName = "Columns";

Default.args = {
    ...componentDefaults
};
