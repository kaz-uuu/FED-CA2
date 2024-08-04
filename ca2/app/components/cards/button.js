import React, { useState } from 'react';
import { CornerDownRight } from 'lucide-react';

const PressedButton = ({ pressed, text = 'Enter', Icon = CornerDownRight, ...props }) => {


        return (
                <button
                        className={`custom-button ${pressed ? 'pressed' : ''}`}
                        {...props}
                >
                        <Icon size={16} />
                        <span>{text}</span>
                        <style jsx>{`
                                .custom-button {
                                        transition: background-position 1s cubic-bezier(0, 0, 0.23, 1);
                                        border: none;
                                        border-radius: 3px;
                                        font-family: "Sohne", sans-serif;
                                        font-size: 18px;
                                        padding: 4px 17px 7px 14px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        gap: 4px;
                                        box-shadow: inset 0 -3px 1px rgba(0, 0, 0, 0.315);
                                        background-image: linear-gradient(90deg, #BDBDBD, #BDBDBD 50%, #ffffff 0);
                                        background-size: 200% 100%;
                                        background-position: 100%;
                                        color: #000000;
                                        cursor: pointer;
                                }

                                .custom-button.pressed {
                                        background-position: 0;
                                        box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.315);
                                        padding-bottom: 5px;
                                        margin-top: 2px;
                                        transition: all 0.1s cubic-bezier(0, 0, 0.23, 1);
                                }
                        `}</style>
                </button>
        );
};

export default PressedButton;