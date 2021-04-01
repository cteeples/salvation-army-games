using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ClickColor : MonoBehaviour
{
    public SpriteRenderer sprite;

    void Update()
    {
        if(Input.GetMouseButtonDown(0))
        {
            StartCoroutine(FlashAim());
        }
    }

    public IEnumerator FlashAim()
    {
        sprite.color = Color.green;
        yield return new WaitForSeconds(0.1f);
        sprite.color = Color.white;
    }
}
