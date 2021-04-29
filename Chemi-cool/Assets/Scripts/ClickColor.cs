using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ClickColor : MonoBehaviour
{
    public SpriteRenderer sprite;

    void Update()
    {
        // Grab input to see if it is a left mouse click
        if(Input.GetMouseButtonDown(0))
        {
            StartCoroutine(FlashAim());
            FindObjectOfType<AudioMNGR>().Play("Blast");
        }
    }

    public IEnumerator FlashAim()
    {
        // Flash a color change to indicate player is firing
        // TODO: Add sound trigger on fire
        sprite.color = Color.green;
        yield return new WaitForSeconds(0.1f);
        sprite.color = Color.white;
    }
}
