import React from 'react'
import './logo.scss'
export default function Logo() {
  return (
    <div style={{ position: 'relative' }}>
      <div id="loader" class="threeSixty">
        <div class="d-flex neon-text">
          <div>
            <div>
              <div class="deg-45">
                <div class="rotate">0</div>
              </div>
            </div>
            <div class="mirrorX">
              <div class="deg-45">
                <div class="rotate">0</div>
              </div>
            </div>
          </div>
          <div class="mirrorY">
            <div class="mirrorX">
              <div class="deg-45">
                <div class="rotate">0</div>
              </div>
            </div>
            <div class="deg-45">
              <div class="rotate">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
