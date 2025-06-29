/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { useState } from 'react';
import { css, useTheme } from '../../..';
import { Icons, Radio, Popover } from '../..';

export interface HeaderWithRadioGroupProps {
  headerTitle: string;
  groupTitle: string;
  groupOptions: { label: string; value: string | number }[];
  value?: string | number;
  onChange: (value: string) => void;
}

function HeaderWithRadioGroup(props: HeaderWithRadioGroupProps) {
  const { headerTitle, groupTitle, groupOptions, value, onChange } = props;
  const theme = useTheme();
  const [popoverVisible, setPopoverVisible] = useState(false);

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <Popover
        trigger="click"
        open={popoverVisible}
        content={
          <div>
            <div
              css={css`
                font-weight: ${theme.fontWeightStrong};
                margin-bottom: ${theme.sizeUnit}px;
              `}
            >
              {groupTitle}
            </div>
            <Radio.GroupWrapper
              spaceConfig={{
                direction: 'vertical',
                size: 4,
                wrap: false,
                align: 'start',
              }}
              value={value}
              onChange={e => {
                onChange(e.target.value);
                setPopoverVisible(false);
              }}
              options={groupOptions}
            />
          </div>
        }
        placement="bottomLeft"
        arrow={{ pointAtCenter: true }}
      >
        <Icons.SettingOutlined
          iconSize="m"
          iconColor={theme.colors.grayscale.light1}
          css={css`
            margin-top: ${theme.sizeUnit * 0.75}px;
            margin-right: ${theme.sizeUnit}px;
          `}
          onClick={() => setPopoverVisible(true)}
        />
      </Popover>
      {headerTitle}
    </div>
  );
}

export default HeaderWithRadioGroup;
