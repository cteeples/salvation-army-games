using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FollowCursor : MonoBehaviour
{
    public void Start()
    {
        Cursor.visible = false;
    }

    public void Update()
    {
        Vector2 cursor = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        transform.position = new Vector2(cursor.x,cursor.y);    }
}
